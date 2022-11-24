const Beneficiarios = () =>{
    return(
        <form className="w-25">
            <h1 className="text-center">BENEFICIARIOS</h1>
  <section class="fw-bold mb-3 w-100 mt-5 text-center ">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <section id="emailHelp" class="form-text"></section>
  </section>
  <section class="fw-bold text-center mb-3 w-100">
    <label for="exampleInputPassword1" class="form-label">Edad</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-3 w-100">
    <label for="exampleInputPassword1" class="form-label">Correo Electrónico</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-3 w-100">
    <label for="exampleInputPassword1" class="form-label">Dirección</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-3 w-100">
    <label for="exampleInputPassword1" class="form-label">Universidad</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </section>
  
 <section class="d-flex flex-column mb-3 w-100 gap-3">
  <button type="submit" class="botones fw-bold btn btn-primary">Insertar Imagen</button>
  <button type="submit" class="botones fw-bold btn btn-primary">Listo</button>
  </section>
</form> 

    
        
  
    )
}

export default Beneficiarios;