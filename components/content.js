export default (props) => (
    <div className="contentaboutme">
        <p className="actualcontentaboutme">
        {props.children}
        </p>
        <style jsx>{`
        .contentaboutme {
            padding: 2.5rem 0;
            margin-left: auto;
            margin-right: auto;
            width: 580px;
            font-family: Times New Roman, Times, serif;
            font-size: 20px;
            text-align: justify;
            line-height: 35px;
        }

        @media only screen and (max-width: 56.25em) {
            .contentaboutme {
                width: 80%;
            }
        `}</style>
    </div>
    
);