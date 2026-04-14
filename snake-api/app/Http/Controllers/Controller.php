use App\Models\Score;
use Illuminate\Http\Request;

class ScoreController extends Controller
{
    public function store(Request $request)
    {
        return Score::create($request->all());
    }

    public function index()
    {
        return Score::orderBy('score', 'desc')->limit(10)->get();
    }
}