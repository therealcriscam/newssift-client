import React, {Component} from 'react'

const AppContext = React.createContext({
  articles: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setArticles: () => {},
  clearArticles: () => {}
});

export default AppContext;

export class AppContextProvider extends Component {
  state = {
    articles: [],
    error: null,
  }

  setArticles = (articles) => {
    this.setState({articles})
  }

  clearArticles = () => {
    this.setState({articles: []})
  }

  setError = (error) => {
    console.log(error)
    this.setState({error})
  }

  clearError = () => {
    this.setState({error: null})
  }

  render() {
    const value = {
      articles: this.state.articles,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setArticles: this.setArticles,
      clearArticles: this.clearArticles,
    }
    
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}