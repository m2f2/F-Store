import { Row, Col } from "react-bootstrap";
type GridListProps<T>={
          records:T[];
          renderItems:(records:T)=> React.ReactNode;
}
type HasId = {id?:number};

const GridList = <T extends HasId>({records,renderItems}:GridListProps<T>) => {
          const categoriesList = records.length > 0 ? records.map(record =>
                    <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
                        {renderItems(record)}
                        </Col>
                  ) : "there are no categories";
  return <Row> {categoriesList} </Row>
}

export default GridList;
