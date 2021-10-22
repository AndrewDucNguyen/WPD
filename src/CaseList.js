import { Link } from 'react-router-dom';

const CaseList = ({cases}) => {
    return ( 
        <div className="case-list">
            <div>
                <Link to={`/view/case/${cases.data._id}`}>
                    <h2>Case: {cases.data.caseNumber}</h2>
                    <h2>{cases.data.title}</h2>
                </Link>
            </div>
            
        </div>
     );
}
 
export default CaseList;