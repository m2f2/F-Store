import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import  store  from '@store/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/global.css'

import AppRouter from '@routes/AppRouter';



ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    
)
