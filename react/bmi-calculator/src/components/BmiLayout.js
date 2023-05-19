import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BmiLayout = ({age,setAge,height,setHeight,weight,setWeight})=>{
    let BMI = 0;
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(age+" "+height+" "+weight);
        BMI = weight/(height * height);
        alert(BMI);
    }
    return(
        <Card style={{width:'30rem',marginTop:"3rem"}} className="mx-auto">
            <Card.Title style={{paddingTop:'3rem',margin:'0'}}>BMI Calculator</Card.Title>
            <Form style={{padding:'1rem'}} onSubmit={handleSubmit}>
                <Form.Group style={{margin:'2rem'}} controlId="formBasicEmail">
                    <Form.Label style={{float:'left'}}>Age</Form.Label>
                    <Form.Control onChange={(event)=>setAge(event.target.value)}  value={age || ""} type="number" placeholder="Enter your age"></Form.Control>
                    <Form.Text className="text-muted float-start">Age from 1 year old.</Form.Text>
                </Form.Group>
                <Form.Group style={{margin:'2rem'}} controlId="formBasicEmail">
                    <Form.Label style={{float:'left'}}>Height</Form.Label>
                    <Form.Control onChange={(event)=>setHeight(event.target.value)}  value={height || ""} type="number" placeholder="Enter your height"></Form.Control>
                    <Form.Text className="text-muted float-start">Height in meters.</Form.Text>
                </Form.Group>
                <Form.Group style={{margin:'2rem'}} controlId="formBasicEmail">
                    <Form.Label style={{float:'left'}}>Weight</Form.Label>
                    <Form.Control onChange={(event)=>setWeight(event.target.value)}  value={weight|| ""} type="number" placeholder="Enter your weight"></Form.Control>
                    <Form.Text className="text-muted float-start">Weight in Kilograms</Form.Text>
                </Form.Group>
                <Button style={{marginTop:'2rem'}} variant="primary" type='submit'>Calculate</Button>
            </Form>
        </Card>
    );
}

export default BmiLayout;