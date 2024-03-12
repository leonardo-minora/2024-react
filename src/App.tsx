import "./App.css";

const MeuBotao = (props: any) => {
  return <button>{props.titulo}</button>;
}

const App = () => {
    return (
      <div className="aplicacao">
        <h1>Bem vindo ao mundo React</h1>
        <MeuBotao titulo="Meu primeiro botão"/>
        <MeuBotao titulo="Segundo botão" />
        <MeuBotao titulo="Último botão" />
      </div>
    );
  }
  
  export default App;
  