import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const BmiResult = ({BMI,setBMI})=>{
    return(
       <Card style={{width:'30rem',marginTop:"3rem"}} className="mx-auto">
            <Card.Title style={{paddingTop:'3rem',margin:'0'}}>BMI Calculator</Card.Title>
            <h3>Your BMI is {BMI}</h3>
            <Button style={{margin:'5rem'}} onClick={()=>setBMI(0)} variant="primary">Reset</Button>
       </Card>
    );
}

export default BmiResult;