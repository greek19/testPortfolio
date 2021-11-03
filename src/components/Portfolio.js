import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      {/*<img src={`${item.imgurl}`} className="item-img" alt="pippo" />*/}
                      <YouTube videoId={`${item.videoUrl}`} opts={opts} onReady={this._onReady} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }

  _onReady(event){
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}