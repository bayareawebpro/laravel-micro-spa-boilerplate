<script>
    export default {
        name: "Collapse",
        data(){
            return {
                active: 'toggle1',
                dropdown: false,
            }
        }
    }
</script>
<template>
    <div>
        <h1 class="page-title">Collapse</h1>
        <div class="card">
            <div class="p-3">
                <v-collapse v-model="active" active="toggle1" class="mb-3">
                    <template v-slot:title>
                        Environment
                    </template>
                    <template v-slot:default>
                        <p>It is often helpful to have different configuration values based on the environment where the application is running. For example, you may wish to use a different cache driver locally than you do on your production server. </p>
                        <p> To make this a cinch, Laravel utilizes the DotEnv PHP library by Vance Lucas. In a fresh Laravel installation, the root directory of your application will contain a .env.example file. If you install Laravel via Composer, this file will automatically be renamed to .env. Otherwise, you should rename the file manually. </p>
                        <p> Your .env file should not be committed to your application's source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed. </p>
                        <p> If you are developing with a team, you may wish to continue including a .env.example file with your application. By putting placeholder values in the example configuration file, other developers on your team can clearly see which environment variables are needed to run your application. You may also create a .env.testing file. This file will override the .env file when running PHPUnit tests or executing Artisan commands with the --env=testing option. </p>
                    </template>
                </v-collapse>

                <v-collapse v-model="active" active="toggle2">
                    <template v-slot:title>
                        Environment
                    </template>
                    <template v-slot:default>
                        <p>It is often helpful to have different configuration values based on the environment where the application is running. For example, you may wish to use a different cache driver locally than you do on your production server. </p>
                        <p> To make this a cinch, Laravel utilizes the DotEnv PHP library by Vance Lucas. In a fresh Laravel installation, the root directory of your application will contain a .env.example file. If you install Laravel via Composer, this file will automatically be renamed to .env. Otherwise, you should rename the file manually. </p>
                        <p> Your .env file should not be committed to your application's source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed. </p>
                        <p> If you are developing with a team, you may wish to continue including a .env.example file with your application. By putting placeholder values in the example configuration file, other developers on your team can clearly see which environment variables are needed to run your application. You may also create a .env.testing file. This file will override the .env file when running PHPUnit tests or executing Artisan commands with the --env=testing option. </p>
                    </template>
                </v-collapse>
            </div>
        </div>
    </div>
</template>
