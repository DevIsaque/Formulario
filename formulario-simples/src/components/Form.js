import { useState } from "react";
import styles from './Form.module.css';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [idade , setIdade] = useState("");
    const [telefone, setTelefone] = useState("");
    const [genero , setGenero] = useState("");
    const [criado , setCriado] = useState(false);


    const Verificador = (e) => {
        e.preventDefault();
        if (name  && email  && idade  && telefone  && genero) {
            setCriado(true);
        } else {
            alert("Preencha todos os campos ")
        }
    }

    const limpar = () => {
        setName("");
        setEmail("");
        setIdade("");
        setTelefone("");
        setGenero("");
        setCriado(false);
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Formulário de Cadastro</h1>
            <form className={styles.form} onSubmit={Verificador}>
                <label className={styles.label}><h1 className={styles.labelTitle}>Nome</h1></label>
                <input 
                className={styles.input}
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                />
                <br />

                <label className={styles.label}><h1 className={styles.labelTitle}>Idade</h1></label>
                <input 
                className={styles.input}
                type="number" 
                value={idade} 
                onChange={(e) => setIdade(e.target.value)} 
                />
                <br />

                <label className={styles.label}><h1 className={styles.labelTitle}>Gênero</h1></label>
                <select
                className={styles.select}
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                >
                    <option value="">Selecione</option>
                    <option value ="Masculino">Masculino</option>
                    <option value ="Feminino">Feminino</option>
                </select> 
                <br />   

                <label className={styles.label}><h1 className={styles.labelTitle}>Email</h1></label>
                <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <label className={styles.label}><h1 className={styles.labelTitle}>Telefone</h1></label>
                <input 
                className={styles.input}
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                />
                <br />

                {criado &&(
                    <div className={styles.resultBox}>
                        <h1 className={styles.resultTitle}>Suas informações</h1>
                        <p><strong>{name}</strong></p>
                        <p><strong>{idade}</strong></p>
                        <p><strong>{genero}</strong></p>
                        <p><strong>{email}</strong></p>
                        <p><strong>{telefone}</strong></p>
                    </div>
                )}

                <div className={styles.buttonGroup}>
                  <button className={styles.button} type="submit">Confirmar</button>
                  <button className={styles.button} type="button" onClick={limpar}>Limpar</button>
                </div>
            </form>
            
        </div>
    )
    
}

export default Form;