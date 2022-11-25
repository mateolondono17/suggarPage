const Ayudas = () =>{
    return(
        
        <form className="w-25">
            <h1 className="titulos text-center">AYUDAS</h1>
  <section class="fw-bold mb-3 w-100 mt-5 text-center ">
    <label for="exampleInputEmail1" class="form-label">Nombre Del Producto</label>
    <input placeholder="Digite Nombre" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <section id="emailHelp" class="form-text"></section>
  </section>
  <section class="fw-bold text-center mb-3 w-100">
    <label for="exampleInputPassword1" class="form-label">Descripción</label>
    <input placeholder="Digite una Descripción" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-3 w-100">
    <label for="exampleInputPassword1" class="form-label">Tienda</label>
    <input placeholder="Digite una Tienda" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-3 w-100">
    <label for="exampleInputPassword1" class="form-label">Cantidad</label>
    <input placeholder="Digite una cantidad" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-3 w-100">
    <label for="exampleInputPassword1" class="form-label">Valor</label>
    <input placeholder="Digite un valor" type="money" class="form-control" id="exampleInputPassword1"/>
  </section>
  
 <section class="d-flex flex-column mb-3 w-100 gap-3">
  
  <button type="submit" class="botones fw-bold btn btn-primary">Listo</button>
  </section>
</form>
    )
}

export default Ayudas;