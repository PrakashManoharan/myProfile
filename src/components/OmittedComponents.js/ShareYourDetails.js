import React from 'react';

export default function ShareYourDetails() {
  return (
    <div>
      <div className="card">
        <div className="col s12 m6">
          <div className="card-content grey lighten-4">
            <div>
              <h5>Please leave your details here!</h5>
            </div>
            <form action="#">
              <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea" />
                <label for="textarea1">Name</label>
              </div>
              <div class="input-field col s12">
                <textarea id="textarea2" class="materialize-textarea" />
                <label for="textarea2">Company</label>
              </div>
              <div class="input-field col s12">
                <textarea id="textarea3" class="materialize-textarea" />
                <label for="textarea3">Email</label>
              </div>
              <div class="input-field col s12">
                <textarea id="textarea4" class="materialize-textarea" />
                <label for="textarea4">Message</label>
              </div>
            </form>
            <button
              class="btn blue lighten-3 hoverable waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
