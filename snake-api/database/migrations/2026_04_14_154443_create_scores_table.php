Schema::create('scores', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->integer('score');
    $table->timestamps();
});