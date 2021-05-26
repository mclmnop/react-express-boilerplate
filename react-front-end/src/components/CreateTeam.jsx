import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Incris ton équipe</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Prénom
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Confirm your email
        </label>
        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormTeamNameEx" className="grey-text">
          Nom de l'équipe
        </label>
        <input type="text" id="defaultFormTeamNameEx" className="form-control" />
  {/*       <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          Your password
        </label> 
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" /> */}
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit">
            Register
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;