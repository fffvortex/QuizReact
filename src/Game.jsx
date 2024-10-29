

export default function Game({ question, onClickVariant, step }) {
    return (
      <>
        <div>
          <div className="progress">
            <div
              style={{ width: `${step * 10}%` }}
              className="progress__inner"
            ></div>
          </div>
          <h1>{question.title}</h1>
          <ul>
            {question.variants.map((text, index) => (
              <li onClick={() => onClickVariant(index)} key={text}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }