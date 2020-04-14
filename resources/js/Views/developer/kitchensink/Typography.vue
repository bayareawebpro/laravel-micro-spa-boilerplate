<script>
    export default {
        name: "Typography",
    }
</script>
<template>
    <div class="layout p-4">
        <hgroup>
            <h1>h1 I am most important.</h1>
            <h2>h2 Back in my quaint <a href='#'>garden</a></h2>
            <h3>h3 Jaunty <a href='#'>zinnias</a> vie with flaunting phlox.</h3>
            <h4>h4 Five or six big jet planes zoomed quickly by the new tower.</h4>
            <h5>h5 Expect skilled signwriters to use many jazzy, quaint old alphabets effectively.</h5>
            <h6>h6 Pack my box with five dozen liquor jugs.</h6>
        </hgroup>
        <hr>
        <h1 class="page-Title">Page Title</h1>
        <p class="page-lead">Page Lead</p>
        <hr>
        <p>It is often helpful to have different configuration values based on the environment where the application is running. For example, you may wish to use a different cache driver locally than you do on your production server. </p>
        <p> To make this a cinch, Laravel utilizes the DotEnv PHP library by Vance Lucas. In a fresh Laravel installation, the root directory of your application will contain a .env.example file. If you install Laravel via Composer, this file will automatically be renamed to .env. Otherwise, you should rename the file manually. </p>
        <p> Your .env file should not be committed to your application's source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed. </p>
        <p> If you are developing with a team, you may wish to continue including a .env.example file with your application. By putting placeholder values in the example configuration file, other developers on your team can clearly see which environment variables are needed to run your application. You may also create a .env.testing file. This file will override the .env file when running PHPUnit tests or executing Artisan commands with the --env=testing option. </p>
        <hr>
        <blockquote>
            <p>I quickly explained that many big jobs involve few hazards</p>
        </blockquote>
        <hr>
        <address>
            <strong>Apple</strong><br>
            1 Infinite Loop<br>
            Cupertino, CA 95014<br>
            United States
        </address>
        <hr>

        <v-video id="cQWeTnOwlm4"></v-video>
    </div>
</template>
