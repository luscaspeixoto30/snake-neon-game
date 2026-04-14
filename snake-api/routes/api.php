Route::post('/score', [ScoreController::class, 'store']);
Route::get('/ranking', [ScoreController::class, 'index']);