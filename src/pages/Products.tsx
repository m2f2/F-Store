import { useEffect } from "react";

import { useAppDispatch, useAppSelector  } from "@store/hooks";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";

import { Container,} from "react-bootstrap";
import Product from '../components/eCommerce/product/Product';
import { useParams } from "react-router-dom";
import Loading from "@components/feedback/Loading/Loading";
import GridList from "@components/common/GridList/GridList";


const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  useEffect(()=>{
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  },[dispatch, params]);

  const {loading, error, records} = useAppSelector(state=>state.products);

  
  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList records={records} renderItems={(record)=> <Product {...record}/>}/>
      
      </Loading>
      
    </Container>
  )
}

export default Products;
