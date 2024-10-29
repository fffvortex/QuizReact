import { questions } from "./questions";
const congrats1 =  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzV0N2w1ajVmaWVxejlsdjAwejdoY3Q3bDR0cmM3YWQ0NDZ4bnlmOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X9izlczKyCpmCSZu0l/giphy.webp'
const congrats2 = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzVzM2p2M3E4dzJtemQ0dnBlOTZnM2g5MmkzNnR6aHlodmx5ZjlqZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KtL4cUGzC2SFOf0wO9/giphy.webp'

export default function Result({ correct }) {
    function Sklon(correct) {
      if (correct === 1) {
        return "вопрос";
      } else if (
        correct === 4 ||
        correct === 2 ||
        correct === 3 ||
        correct === 4
      ) {
        return "вопроса";
      } else {
        return "вопросов";
      }
    }
    function setImg(correct){
        if (correct > 7){
            return congrats1
        }
        return congrats2
    }
  
    return (
      <div className="result">
        <img src={setImg(correct)} />
        <h2>
          Вы ответили правильно на {correct} {Sklon(correct)} из{" "}
          {questions.length}
        </h2>
        <a href="/">
          <button>
            Попробовать снова
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </a>
      </div>
    );
  }