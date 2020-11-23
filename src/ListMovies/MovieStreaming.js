import React, { Component } from "react";

export default class MovieStreaming extends Component {
  render() {
    const Now = [
      { src: require("./images/baaghi-3.jpg").default },
      { src: require("./images/bombshell.jpg").default },
      { src: require("./images/bunker.png").default },
      { src: require("./images/chhapaak.png").default },
      { src: require("./images/countdown.png").default },
      { src: require("./images/darbar.png").default },
      { src: require("./images/dhruva-natchathiram.jpg").default },
      { src: require("./images/fast-and-furious.jpg").default },
      { src: require("./images/Film-Background.jpg").default },
      { src: require("./images/frozen-2.jpg").default },
      { src: require("./images/grudge_bg.jpg").default },
    ];
    const Coming = [
      { src: require("./images/hero.png").default },
      { src: require("./images/jumanji-the-next-level.jpg").default },
      { src: require("./images/likeaboss.png").default },
      { src: require("./images/mafia.jpg").default },
      { src: require("./images/master.jpg").default },
      { src: require("./images/myspy.png").default },
      { src: require("./images/no-time-to-die.png").default },
      { src: require("./images/OMK.jpg").default },
      { src: require("./images/peter-rabbit-2.jpg").default },
      { src: require("./images/onward.png").default },
      { src: require("./images/underwater.png").default },
      { src: require("./images/movieLogo.png").default },
    ];

    const Exl = [
      { src: require("./images/sonic-the-hedgehog.jpg").default },
      { src: require("./images/soorarai-pottru.png").default },
      { src: require("./images/spies-in-disguise-.jpg").default },
      { src: require("./images/tanhaji.png").default },
      { src: require("./images/the-invisible-man.png").default },
      { src: require("./images/thegrudge.jpg").default },
    ];
    return (
      <div id="movie-streaming">
        <h3>Now Showing</h3>
        <div className="movie-list">
          {Now.map((img) => (
            <div className="card">
              <img src={img.src} />
            </div>
          ))}
        </div>
        <h3>Coming Soon</h3>
        <div className="movie-list">
          {Coming.map((img) => (
            <div className="card">
              <img src={img.src} />
            </div>
          ))}
        </div>
        <h3>Exclusive</h3>
        <div className="movie-list">
          {Exl.map((img) => (
            <div className="card">
              <img src={img.src} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
