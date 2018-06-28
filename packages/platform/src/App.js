import React, { Component } from "react";
import {
  Typography,
  Button,
  ThemeProvider,
  Logo,
  AppBar,
  NavBar,
  MainContainer
} from "@unireact/components";
//import { Router, Route } from "react-router-native";
import { Router, Route } from "react-router-dom";
import createHistory from "history/createMemoryHistory";
import { FlatList, View, StyleSheet } from "react-native";

//import LogoImg from "../assets/images/logo.png";
import rss from "../assets/images/rss.png";
import podcast from "../assets/images/podcast.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import awesome from "../assets/images/awesome.png";
import rss_selected from "../assets/images/rss_selected.png";
import podcast_selected from "../assets/images/podcast_selected.png";
import twitter_selected from "../assets/images/twitter_selected.png";
import youtube_selected from "../assets/images/youtube_selected.png";
import awesome_selected from "../assets/images/awesome_selected.png";

const history = createHistory({
  initialEntries: ["/youtube"]
});
const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});

const Podcast = () => {
  return (
    <Typography variant="display3" color="secondary">
      Podcast
    </Typography>
  );
};
const Twitter = () => {
  return (
    <Typography variant="display3" color="secondary">
      Twitter
    </Typography>
  );
};

class App extends Component {
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false
  };
  componentDidMount() {
    this.makeRemoteRequest();
  }
  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  /*  Youtube = () => {
    return
  }; */
  Rss() {
    return (
      <Typography variant="display3" color="secondary">
        RSS
      </Typography>
    );
  }
  render() {
    return (
      <ThemeProvider>
        <FlatList
          data={[{ key: "a" }, { key: "b" }]}
          renderItem={({ item }) => <Typography>{item.key}</Typography>}
        />
        {/* <Router history={history}> */}
        {/* <MainContainer> */}
        {/*  <View style={styles.list}>

        </View> */}
        {/*  <AppBar>
              <NavBar
                navItems={[
                  { img: rss, img_selected: rss_selected, type: "rss" },
                  {
                    img: podcast,
                    img_selected: podcast_selected,
                    type: "podcast"
                  },
                  {
                    img: twitter,
                    img_selected: twitter_selected,
                    type: "twitter"
                  },
                  {
                    img: youtube,
                    img_selected: youtube_selected,
                    type: "youtube"
                  },
                  {
                    img: awesome,
                    img_selected: awesome_selected,
                    type: "awesome"
                  }
                ]}
                navChange={item => history.push(item.type)}
              />
            </AppBar>
            <MainContainer>
              <Route exact path="/" component={this.Rss} />
              <Route path="/podcast" component={Podcast} />
              <Route path="/youtube" component={this.Youtube} />
              <Route path="/twitter" component={Twitter} />
            </MainContainer> */}
        {/*         </MainContainer>
 */} {/* </Router> */}
      </ThemeProvider>
    );
  }
}

export default App;
