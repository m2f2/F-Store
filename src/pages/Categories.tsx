import Category from "@components/eCommerce/category/Category";
import Loading from "@components/feedback/Loading/Loading";
import GridList from "@components/common/GridList/GridList";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";


const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);
  
   
  return (
  
      <Container>
        <Loading loading={loading} error={error}>
          <GridList records={records} renderItems = {(record)=> <Category {...record}/>}/>
          
        </Loading>
    </Container>
  
    
  )
}

export default Categories
