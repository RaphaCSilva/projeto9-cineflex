import { Link } from "react-router-dom";

export default function Horario(props){
    return (
          <div className="horario">
            <h4>
              {props.diadasemana} - {props.data}
            </h4>
              <div className="horas">
                {props.times.map((hora, index) => {
                    
                    return (
                        <Link to= {`/assentos/${hora.id}`} key = {index}>
                        <div className="caixalaranja" >
                        <h5>
                          {hora.name}
                        </h5>
                      </div>
                      </Link>
                    );
                })}
            </div>
          </div>
    );
}