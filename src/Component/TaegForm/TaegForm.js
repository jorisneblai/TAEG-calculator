import React, { useState } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import './TaegForm.css';
import calculateTaeg from '../../Scripts/CalcultateTaeg';

const TaegForm = () => {
  // The state with the const allowing display the result, and all the consts for the different values settled at null before the user fill the inputs
    const [showResult, setShowResult] = useState(false);
    const [loan, setLoan] = useState(null);
    const [duration, setDuration] = useState(null);
    const [nominalRate, setNominalRate] = useState(null);
    const [warrantyFees, setWarrantyFees] = useState(null);
    const [applicationFees, setApplicationFees] = useState(null);
    const [insuranceRate, setInsuranceRate] = useState(null);
    const [taeg, setTaeg] = useState(0);

    const handleSubmit = (e) => {
      // This function allow to display the result when the user submit the form
      e.preventDefault();
      setTaeg(calculateTaeg(parseFloat(loan), parseFloat(duration), parseFloat(nominalRate), parseFloat(warrantyFees), parseFloat(applicationFees), parseFloat(insuranceRate)));
      setShowResult(true);
    };
  
    return (
      // Use of a ternary operator to display the form and display the result when the submit button is clicked.
        !showResult ? (
          <Container className="Container">
            <Form className="Form">
              <Form.Field>
                <label>Montant emprunté</label>
                <input placeholder="Montant emprunté" value={loan} onChange={(e) => setLoan(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Durée d'emprunt (en mois)</label>
                <input placeholder="Durée d'emprunt (en mois)" value={duration} onChange={(e) => setDuration(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Taux nominal</label>
                <input placeholder="Taux nominal" value={nominalRate} onChange={(e) => setNominalRate(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Frais de garantie</label>
                <input placeholder="Frais de garantie" value={warrantyFees} onChange={(e) => setWarrantyFees(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Frais de dossier et de courtage</label>
                <input placeholder="Frais de dossier et de courtage" value={applicationFees} onChange={(e) => setApplicationFees(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Taux d'assurance</label>
                <input placeholder="Taux d'assurance" value={insuranceRate} onChange={(e) => setInsuranceRate(e.target.value)} />
              </Form.Field>
              <Button 
                type="submit" 
                className="FormButton" 
                onClick={(e) => {handleSubmit(e)}}
                >
                  Calculer mon TAEG
                </Button>
            </Form>
          </Container>
        )
      :
        <>
          <Container className="Container" text>
            <div className="FinalResult">
              {taeg} <span className="Percentage">%</span>
            </div>
            <Button className="FormButton" onClick={() => setShowResult(false)}>Calculer un autre TAEG</Button>
          </Container>
        </>
    );
  }

export default TaegForm;