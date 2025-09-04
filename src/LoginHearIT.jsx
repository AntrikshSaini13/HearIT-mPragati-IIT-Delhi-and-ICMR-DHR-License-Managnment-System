import './css/login.css';
import './css/main.css';
function LoginHearIT ()
{
    return <main>
        <section class="login_section mt-5">
            <div id="login_page" class="container-fluid ">
                <div id="" class="row justify-content-center text-center login_page_row">
                    <h3 id="login_heading_3" class="text-light"><font id="login_text_font" class="text-light login_text"><u>Login Form</u></font></h3>
                    <div id="login" class="col-sm-8 col-md-5 col-xl-5 text-start p-5 login_page_column">
                        <form id="login_form" class="" action="#">
                            <div class="form pt-1">
                                <label for="gmail" id="gmail_label" class="form-label"><h3 >Enter the Gmail</h3></label>
                                <input type="email" class="form-control" id="gmail" name="gmail" placeholder="name@example.com" required/>
                            </div>
                            <div class="form pt-1">
                                <label for="password" id="password_label" class="form-label"><h3>Enter the Password</h3></label>
                                <input type="password" class="form-control" id="password" name="password"  placeholder="Password" required/>                       
                            </div>
                            <div id="form_button" class="form d-flex justify-content-center pt-4">            
                                <button id="login_button" class="button" type="submit">Login</button>                     
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </main>
}
export default LoginHearIT;