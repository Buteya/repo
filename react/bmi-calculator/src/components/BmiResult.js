import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const BmiResult = ({BMI,setBMI,age,setAge,setHeight,setWeight})=>{
    const Message = ()=>{
            if(age > 20){
              if(BMI > 18 && BMI <  25){
                return<p>You are healthy.</p>
            }else if(BMI < 18){
                 return <p>You are underweight.</p>
            }else if(BMI > 25 && BMI < 30){
                 return <p>You are overweight.</p>
            }else if(BMI > 30){
                return <p>You are obese</p>
            }
            }else if(age < 20 && age > 1){
                if(BMI*.2 > 17 && BMI <  24){
                    return<p>You are healthy.</p>
                }else if(BMI*.2 < 17){
                     return <p>You are underweight.</p>
                }else if(BMI*.2 > 24 && BMI < 29){
                     return <p>You are overweight.</p>
                }else if(BMI*.2 > 29){
                    return <p>You are obese</p>
                }
            }
    }
    return(
       <Card style={{width:'30rem',marginTop:"3rem"}} className="mx-auto">
            <Card.Title style={{paddingTop:'3rem',margin:'0'}}>BMI Calculator</Card.Title>
            <Form>
                {(age < 1)?<h3 style={{margin:'3rem',}}>Cannot calculate BMI of age less than 1</h3>:<h3 style={{marginTop:'3rem'}}>Your BMI is {BMI}</h3>}
                <Message />
                <Button style={{margin:'5rem'}} onClick={()=>{setBMI(0);setAge(0);setHeight(0);setWeight(0);}} variant="primary">Reset</Button> 
            </Form>
       </Card>
    );
}

export default BmiResult;