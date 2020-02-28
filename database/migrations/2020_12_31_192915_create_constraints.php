<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConstraints extends Migration
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        Schema::table('attachments', function (Blueprint $table) {
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('CASCADE');
        });

//        Schema::table('users', function (Blueprint $table) {
//            $table->foreign('attachment_id')
//                ->references('id')
//                ->on('attachments')
//                ->onDelete('SET NULL');
//        });
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        //Schema::disableForeignKeyConstraints();
        Schema::table('attachments', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
        //Schema::enableForeignKeyConstraints();
    }
}
