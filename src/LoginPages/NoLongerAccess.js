import "../css/forgot.css"
import Footer from "../components/footer"

function NoLongerAccess() {
    return ( 
        <div className="NoLongerAccess">
        <nav class="navbar navbar-expand-md shadow">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="./images/fblogo2.png" alt="facebook-logo" /></a>
          </div>
        </nav>
         <div className="container-fluid d-flex align-items-center justify-content-center p-5">
             <div class="card find">
                <div className="card-header">
                    <h4 className="text-center mt-2">Get back on Facebook</h4>
                </div>
                <img class="card-img-top" src="./images/no_longer_access.png" alt="Title"/>
                <div class="card-body">
                    <h3>We don't recognize your device</h3>
                    <p className="lead mb-3">We can't match the device you're using to the account you're trying to access.</p>
                    <h4>How to try this again</h4>
                </div>
                <div className="card-footer">
                    <p className="text-secondary p-3 border"><i class="fa fa-desktop" aria-hidden="true"></i> Use another device. This must be a device you've used to log into this account before.</p>
                    <button className="btn btn-secondary text-dark w-100 btn-lg" data-bs-toggle="modal" data-bs-target="#noLongerAccessModal">This don't work</button>
                </div>
             </div>
         </div>
        
        <div class="modal fade" id="noLongerAccessModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalTitleId">I can't try another device</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>If you can no longer access your login email or phone number, and you don't have access to a device you've used to log into this account before, it's not safe for us to give you another way to log in.</p>
                        <p>We understand that this might not help you get back on Facebook, but we have to take this action to stop anyone who doesn't own this account from getting into it.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    

        </div>
);
}

export default NoLongerAccess;