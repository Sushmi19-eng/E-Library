<div class="container">
    <h1>Login</h1>
    <form>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</div>
<script type="text/javascript">
    document.getElementByID('loginForm').addEventListener('submit',function(event){
        event.preventDefault();
        window.location.href = 'index.html';
    });
</script>
