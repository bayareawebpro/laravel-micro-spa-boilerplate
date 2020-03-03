<script>
    export default {
        name: "Modals",
        data: ()=>({
            modal: false,
            status: null,
            content: null,
        }),
        mounted(){
            setTimeout(()=>this.modal = true, 100)
        },
    }
</script>
<template>
    <div>
        <button class="btn" @click="modal=true">Open</button>
        <p>Event: @{{ status }}</p>
        <v-modal
            v-model="modal"
            @opened="status='opened'"
            @closed="status='closed'"
            :fullscreen="modal==='fullscreen'">
            <template v-slot:title>
                <div>{{ modal==='fullscreen' ? 'Fullscreen': 'Responsive' }} Modal</div>
            </template>
            <template v-slot:content>
                <transition name="fadeInLeft" mode="out-in">
                    <span v-if="content==='more'">
                        <h1>h1 I am most important.</h1>
                        <h2>h2 Back in my quaint <a href='#'>garden</a></h2>
                        <h3>h3 Jaunty <a href='#'>zinnias</a> vie with flaunting phlox.</h3>
                        <h4>h4 Five or six big jet planes zoomed quickly by the new tower.</h4>
                        <h5>h5 Expect skilled signwriters to use many jazzy, quaint old alphabets effectively.</h5>
                        <h6>h6 Pack my box with five dozen liquor jugs.</h6>
                        <p>To make this a cinch, Laravel utilizes the DotEnv PHP library by Vance Lucas. In a fresh Laravel installation, the root directory of your application will contain a .env.example file. If you install Laravel via Composer, this file will automatically be renamed to .env. Otherwise, you should rename the file manually. </p>
                        <p>Your .env file should not be committed to your application's source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed. </p>
                        <p>If you are developing with a team, you may wish to continue including a .env.example file with your application. By putting placeholder values in the example configuration file, other developers on your team can clearly see which environment variables are needed to run your application. You may also create a .env.testing file. This file will override the .env file when running PHPUnit tests or executing Artisan commands with the --env=testing option. </p>
                    </span>
                    <div v-else>
                        <h2>Environment</h2>
                        <p>It is often helpful to have different configuration. </p>
                    </div>
                </transition>
             </template>
            <template v-slot:actions>
                <v-action :focused="true" @click="modal= null" class="btn-green mr-1">
                    <i class="fa fa-check-circle"/> Done
                </v-action>
                <button class="btn btn-xs ml-auto" @click="modal=true"><i class="fa fa-window-restore"></i> Responsive</button>
                <button class="btn btn-xs mx-1" @click="modal='fullscreen'"><i class="fa fa-window-maximize"></i> Fullscreen</button>
                <button class="btn btn-xs ml-auto" @click="content='more'"><i class="fa fa-plus"></i> More</button>
                <button class="btn btn-xs ml-1" @click="content='less'"><i class="fa fa-minus"></i> Less</button>
            </template>
        </v-modal>
    </div>
</template>
