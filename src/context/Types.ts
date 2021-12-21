interface User {
    email: string
    name: string
    password: string
    body: string
  }
  
  type ArticleState = {
    articles: IArticle[]
  }
  
  type ArticleAction = {
    type: string
    article: IArticle
  }
