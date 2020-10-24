import { AppProps } from "next/app"
import React, { FC, useEffect } from "react"
import { Provider } from 'react-redux'
import { fetchPostsAC } from "../redux/actions/post-actions"
import { useStore } from '../redux/store'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)
  const dispatch = store.dispatch;
  useEffect(() => {
    //@ts-expect-error
    dispatch(fetchPostsAC())
  }, [dispatch])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
