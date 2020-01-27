import React, { Component } from "react";
import { getData } from "../Redux/Actions/getData";
import { connect } from "react-redux";
import { Row, Col, Container, Button, Card } from "react-bootstrap";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
      search:'',
      notFound:true
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
    
   
  }

  onchangeSearch = e => {
    this.setState({
      search: e.target.value
    });

  };
  onSubmit = async e => {
    e.preventDefault();

    const profile = this.state.search;
    console.log('ddsd', profile);
    
   await this.props.dispatch(getData(profile));

    this.setState({
      data: this.props.list.githubData,
      notFound:false
    });
  
   
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    if (this.state.isLoading===true) {
    
        return (
          <div>
            <p>Loading ....</p>
          </div>
        )}
        
    const {data}=this.state

  console.log(data)
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2"></Col>
            <Col md="auto">
              {" "}
              <div>
                <form>
                  <input
                    id="search"
                    type="search"
                    onChange={this.onchangeSearch}
                    style={{
                      color: "black",
                      marginTop: 20,
                      height: 40,
                      backgroundColor: "white"
                    }}
                  />
                  <Button onClick={this.onSubmit} variant="light">
                    Search
                  </Button>
                </form>
              </div>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
          <div style={{marginTop:50}}>
            
          <Row className="justify-content-md-center">
      
            {data.map((repository,index)=>{
              return(

           
            <Col md="auto"
            key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{repository.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                   {repository.owner.login}
                  </Card.Subtitle>
                  <Card.Text>
                  {repository.created_at}
                  </Card.Text>
                  <Card.Link href={repository.html_url}>Card Link</Card.Link>
                  <Card.Link href={repository.url}>Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            ) })}
            <Col xs lg="2"></Col>
          </Row>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.getData
  };
};
export default connect(mapStateToProps)(Home);
