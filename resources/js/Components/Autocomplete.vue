<script>
    import debounce from "./../utilities/Debounce"
    export default {
        name: "v-dropdown",
        props: {
            placeholder: {type: String, default: () => 'Type to search...'},
            params: {type: Object, default: () => null},
            route: {type: String, required: true},
            autoload: {default: () => false},
            tabindex: {default: () => 1},
            value: {default: () => null},
        },
        data() {
            return {
                wasLoaded: false,
                isLoading: false,
                isVisible: false,
                searchTerm: '',
                selected: null,
                options: [],
            }
        },
        watch: {
            searchTerm: {
                handler(newVal, oldVal) {
                    if (
                        newVal.length > 0 &&
                        newVal !== oldVal &&
                        !this.selectionActive
                    ) {
                        this.debouncedFetch()
                    }
                }
            },
            isVisible: {
                handler(isVisible) {
                    if (isVisible) {
                        this.$refs.input.focus()
                        if (this.hasOptions) {
                            this.scrollToSelected()
                        } else if(!this.isLoading) {
                            this.debouncedFetch()
                        }
                    }else{
                        this.blur()
                    }
                }
            },
            selected: {
                handler(selected) {
                    if (selected) {
                        this.searchTerm = selected.label
                        this.scrollToSelected()
                    }
                    this.$emit('input', selected || null)
                }
            }
        },
        computed: {
            selectedIndex() {
                return this.options.findIndex(this.isSelected)
            },
            selectionActive() {
                return this.selected && this.searchTerm.includes(this.selected.label)
            },
            placeholderText() {
                if (!this.selected && this.options.length) {
                    return this.options[0].label
                }
                return this.placeholder
            },
            hasOptions() {
                return this.options.length
            },
            firstOption(){
                return this.options[0] || null
            }
        },
        methods: {
            clear() {
                this.options = []
                this.selected = null
                this.wasLoaded = false
                this.isVisible = false
                this.searchTerm = ''
            },
            clearSelection(){
                this.clear()
                this.focus()
            },
            select(item) {
                if([undefined, null, ''].includes(item)) return;
                this.selected = item
            },
            selectAndClose(option){
                this.select(option)
                this.isVisible = false
            },
            selectSearchTerm(){
                if(this.searchTerm){
                    this.selectAndClose({
                        label: this.searchTerm,
                        value: this.searchTerm
                    })
                }
            },
            scrollToSelected() {
                this.$nextTick(() => {
                    if (this.hasOptions) {
                        const index = this.selectedIndex
                        const el = this.$refs.option[index]
                        if (el && this.$refs.scrollable) {
                            this.$refs.scrollable.scrollTop = el.offsetTop
                        }
                    }
                })
            },
            selectFirst() {
                if (this.selected) return
                if(this.hasOptions){
                    this.select(this.firstOption)
                }else{
                    this.selectSearchTerm()
                }
            },
            selectNext() {
                if (!this.isVisible || !this.hasOptions) return
                const index = this.selectedIndex
                const item = this.options[index + 1]
                this.select(item)
            },
            selectPrev() {
                if (!this.isVisible || !this.hasOptions) return
                const index = this.selectedIndex
                const item = this.options[index - 1]
                this.select(item)
            },
            isSelected(option) {
                return this.selected && this.selected.value === option.value
            },
            blur() {
                this.isVisible = false
                setTimeout(() => this.$emit('blur'), 100)
            },
            open() {
                this.isVisible = true
            },
            focus() {
                this.open()
                this.$emit('focus')
            },
            onDelete() {
                if (this.selectionActive) {
                    this.clear()
                } else {
                    this.searchTerm = this.searchTerm.slice(0, -1)
                }
            },
            fetch() {
                if (this.isLoading || !this.searchTerm.length) return
                this.isLoading = true
                this.selected = null
                this.$http
                    .get(this.route, {
                        params: Object.assign({}, this.params, {
                            keywords: this.searchTerm
                        })
                    })
                    .then(({data}) => {
                        this.options = data
                        this.isLoading = false
                    })
                    .catch((e) => {
                        this.isLoading = false
                        this.$emit('error', e)
                        console.error(e)
                    })
            },
        },
        created() {
            this.$on('blur', this.selectFirst)
            this.debouncedFetch = debounce(this.fetch, 300)
            if (this.autoload) {
                this.debouncedFetch()
            }
        }
    }
</script>
<template>
    <div class="v-dropdown">
        <div class="_dropdown-input" :class="{focused: isVisible}">
            <div class="_dropdown-input-slot">
                <slot>
                    <svg width="16" height="16" viewBox="0 0 513.597 513.597" xmlns="http://www.w3.org/2000/svg"><path d="m263.278.107c-104.301-3.515-189.955 79.988-189.955 183.495 0 117.469 112.73 202.72 175.915 325.322 3.208 6.225 12.169 6.233 15.388.009 57.16-110.317 154.854-184.291 172.959-290.569 18.746-109.977-62.809-214.498-174.307-218.257zm-6.355 279.666c-53.113 0-96.171-43.059-96.171-96.171s43.059-96.171 96.171-96.171c53.113 0 96.172 43.059 96.172 96.171s-43.059 96.171-96.172 96.171z"/></svg>
                </slot>
            </div>
            <div class="_dropdown-input-field">
                <input
                    ref="input"
                    type="text"
                    v-model="searchTerm"
                    :tabindex="tabindex"
                    :placeholder="placeholderText"
                    @keydown.delete.capture.prevent.stop="onDelete"
                    @keydown.down.capture.prevent.stop="selectNext"
                    @keydown.up.capture.prevent.stop="selectPrev"
                    @keydown.enter.capture.prevent.stop="blur"
                    @keydown.esc.capture.prevent.stop="blur"
                    @focus="focus"
                    @blur="blur"
                >
            </div>
            <transition name="fade" mode="out-in">
                <div v-if="isLoading" class="_dropdown-input-slot">
                    <v-loading/>
                </div>
                <div
                    v-else-if="selected"
                    @click="clearSelection"
                    class="_dropdown-input-clear">
                    <svg
                        width="13"
                        height="13"
                        viewBox="0 0 42 42"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="m27.948 20.878 12.343-12.342c1.953-1.953 1.953-5.119 0-7.071-1.951-1.952-5.119-1.952-7.07 0l-12.343 12.344-12.343-12.344c-1.951-1.952-5.119-1.952-7.07 0-1.953 1.953-1.953 5.119 0 7.071l12.342 12.342-12.342 12.342c-1.953 1.953-1.953 5.119 0 7.071.975.977 2.256 1.464 3.535 1.464 1.278 0 2.56-.487 3.535-1.464l12.343-12.342 12.343 12.343c.976.977 2.256 1.464 3.535 1.464s2.56-.487 3.535-1.464c1.953-1.953 1.953-5.119 0-7.071z"></path>
                    </svg>
                </div>
            </transition>
        </div>
        <transition name="fade">
            <div style="position: relative" v-if="isVisible">
                <div class="_dropdown-options" ref="scrollable">
                    <div v-if="options.length">
                        <div
                            ref="option"
                            v-for="option in options"
                            :class="{selected: isSelected(option)}"
                            @click="selectAndClose(option)"
                            class="_dropdown-option">
                            {{ option.label }}
                        </div>
                    </div>
                    <div
                        v-else-if="searchTerm"
                        @click="selectSearchTerm"
                        class="_dropdown-option selected"
                        ref="option">
                        {{ searchTerm }}
                    </div>
                    <div v-else class="_dropdown-no-options">
                        No results, type to search...
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<style lang="sass" scoped>
    $radius: 20px
    $focusedBorder: rgba(0, 139, 255, 0.4)
    $accentColor: #2185c5
    .v-dropdown
        display: flex
        flex-direction: column

        ._dropdown-input
            transition: all 200ms ease-in-out
            border: 1px solid #ccc
            background-color: white
            border-radius: $radius
            justify-content: center
            flex-direction: row
            align-items: center
            font-weight: bold
            cursor: pointer
            display: flex
            padding: 0

        & ._dropdown-input-slot
            display: inline-flex
            padding: 0 6px 0 12px

        & ._dropdown-input-field
            text-indent: 12px
            display: flex
            flex: 1

        & .focused
            box-shadow: 0 -1px 8px $focusedBorder
            border: 1px solid $focusedBorder
            border-bottom-right-radius: 0
            border-bottom-left-radius: 0

        & input
            line-height: 40px !important
            border-radius: $radius
            border: none
            padding: 0
            display: block
            width: 100%

        ._dropdown-input-clear
            transition: all 200ms ease-in-out
            padding: 0 12px 0 6px
            color: #999
            &:hover
                color: #444

        ._dropdown-options
            z-index: 8 !important
            box-shadow: 0 -1px 8px $focusedBorder
            border: 1px solid $focusedBorder
            border-top: 0
            border-radius: 0 0 12px 12px
            scroll-behavior: smooth
            overflow: scroll
            position: absolute
            background: white
            max-height: 200px
            padding: 6px 0
            top: 0
            left: 0
            width: 100%

        .fade-enter-active, .fade-leave-active
            transition: all ease-in-out 120ms
        .fade-enter, .fade-leave-to
            opacity: 0

        ._dropdown-option,
        ._dropdown-no-options
            display: block
            cursor: pointer
            padding: 6px 12px
            font-size: 15px
            line-height: 16px

        ._dropdown-no-options
            cursor: not-allowed

        ._dropdown-option:focus
            outline: $accentColor

        ._dropdown-option.selected
            font-weight: bold
            background-color: $accentColor
            color: white

        ._dropdown-option:hover:not(.selected)
            background-color: #f3f3f3
            color: $accentColor
</style>
