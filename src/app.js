'use strict'

import React from 'react';
import AppContent from './components/app-content';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            arraySubreddit: [],
            imgDefault: '/img/thumbdefault.png',
            initPost: 10,
            expanded: false,
            activebt:''
        }

        this.exibmornews = this.exibmornews.bind(this);
    }

    

    getResultReddit(type) {
        return (e) => {

            fetch(`https://www.reddit.com/${type}.json`)
            .then(res => res.json())
            .then(
                (result) => { 
                    const conteArray = result.data.children;
                    this.setState({
                        arraySubreddit :conteArray.map((retorna) => {
                            return {
                                imgThumb: retorna.data.thumbnail,
                                userid: retorna.data.subreddit,
                                title: retorna.data.title,
                                date: retorna.data.created_utc,
                                url: retorna.data.permalink,
                                domain: retorna.data.domain
                            }
                        }),
                        activebt: type
                    
                    });
                },
                
            )

        }


    }


    exibmornews() {

        this.state.initPost === 10 ? (
            this.setState({ initPost: this.state.arraySubreddit.length, expanded: true })
          ) : (
            this.setState({ initPost: 10, expanded: false })
        )

    }


    render() {

        return <AppContent
            {...this.state}
            getHot={this.getResultReddit('hot')}
            getNews={this.getResultReddit('new')}
            getRising={this.getResultReddit('rising')}
            exibmornews ={this.exibmornews}
        />;
    }
}


export default App;