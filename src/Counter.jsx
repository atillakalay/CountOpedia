import React from "react";
import { useSpring, animated } from "react-spring";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      gameStatus: "",
      lastPlay: "",
      highScore: 0,
      difficulty: "normal",
      language: "tr",
    };
  }

  handleAttack = () => {
    this.setState((previousState) => {
      let multiplier = this.getDifficultyMultiplier();
      let newCount = previousState.count + Math.round(Math.random() * 10 * multiplier);
      return {
        count: newCount,
        lastPlay: "Attack",
        gameStatus: newCount > 10 ? "You Won!!" : previousState.gameStatus,
        highScore: Math.max(newCount, previousState.highScore),
      };
    });
  };

  handleDefence = () => {
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
        lastPlay: "Defence",
        gameStatus: newCount < -10 ? "You Lost!!" : previousState.gameStatus,
      };
    });
  };

  getDifficultyMultiplier = () => {
    switch(this.state.difficulty) {
      case "easy": return 0.8;
      case "hard": return 1.2;
      default: return 1;
    }
  };

  changeDifficulty = (newDifficulty) => {
    this.setState({ difficulty: newDifficulty });
  };

  changeLanguage = (newLanguage) => {
    this.setState({ language: newLanguage });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  };
  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        gameStatus: "",
        lastPlay: "",
      };
    });
  };
  render() {
    const { language } = this.state;
    const texts = {
      gameScore: language === "tr" ? "Oyun Skoru:" : "Game Score:",
      lastPlay: language === "tr" ? "Son Hamle:" : "Last Play:",
      gameStatus: language === "tr" ? "Oyun Durumu:" : "Game Status:",
      attack: language === "tr" ? "Saldırı" : "Attack",
      defend: language === "tr" ? "Savunma" : "Defend",
      randomPlay: language === "tr" ? "Rastgele Hamle" : "Random Play",
      reset: language === "tr" ? "Sıfırla" : "Reset",
      highScore: language === "tr" ? "En Yüksek Skor:" : "High Score:",
      youWon: language === "tr" ? "Kazandınız!!" : "You Won!!",
      youLost: language === "tr" ? "Kaybettiniz!!" : "You Lost!!",
      easy: language === "tr" ? "Kolay" : "Easy",
      normal: language === "tr" ? "Normal" : "Normal",
      hard: language === "tr" ? "Zor" : "Hard",
    };

    const translatedLastPlay = this.state.lastPlay === "Attack" ? texts.attack : 
                               this.state.lastPlay === "Defence" ? texts.defend : 
                               this.state.lastPlay;

    return (
      <div className="row text-white text-center">
        <AnimatedScore score={this.state.count} gameScoreText={texts.gameScore} />
        <p>{texts.lastPlay} {translatedLastPlay}</p>
        <AnimatedGameStatus status={this.state.gameStatus === "You Won!!" ? texts.youWon : 
                                    this.state.gameStatus === "You Lost!!" ? texts.youLost : 
                                    this.state.gameStatus} />
        <h4>{texts.highScore} {this.state.highScore}</h4>
        <div className="col-6 col-md-3 offset-md-3">
          <AnimatedImage
            src={attack}
            onClick={this.handleAttack}
            borderColor="green"
          />
        </div>
        <div className="col-6 col-md-3 ">
          <AnimatedImage
            src={defend}
            onClick={this.handleDefence}
            borderColor="red"
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            {texts.randomPlay}
          </button>
          <br />
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            {texts.reset}
          </button>
        </div>
        <div className="col-12 mt-3">
          <button onClick={() => this.changeDifficulty("easy")} className="btn btn-success mx-2">{texts.easy}</button>
          <button onClick={() => this.changeDifficulty("normal")} className="btn btn-warning mx-2">{texts.normal}</button>
          <button onClick={() => this.changeDifficulty("hard")} className="btn btn-danger mx-2">{texts.hard}</button>
        </div>
        <div className="col-12 mt-3">
          <button onClick={() => this.changeLanguage("tr")} className="btn btn-info mx-2">Türkçe</button>
          <button onClick={() => this.changeLanguage("en")} className="btn btn-info mx-2">English</button>
        </div>
      </div>
    );
  }
}

// Animasyonlu bileşenler
const AnimatedScore = ({ score, gameScoreText }) => {
  const props = useSpring({ number: score, from: { number: 0 } });
  return <animated.h1>{props.number.to(n => `${gameScoreText} ${n.toFixed(0)}`)}</animated.h1>;
};

const AnimatedGameStatus = ({ status }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return <animated.h3 style={props}>{status}</animated.h3>;
};

const AnimatedImage = ({ src, onClick, borderColor }) => {
  const [props, set] = useSpring(() => ({ scale: 1 }));
  return (
    <animated.img
      style={{
        width: "100%",
        cursor: "pointer",
        border: `1px solid ${borderColor}`,
        ...props,
      }}
      className="p-4 rounded"
      src={src}
      onClick={onClick}
      onMouseEnter={() => set({ scale: 1.1 })}
      onMouseLeave={() => set({ scale: 1 })}
    />
  );
};
