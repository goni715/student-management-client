
type TProps = {
    table: string;
    type: string;
}

const FormModal = ({table, type}: TProps) => {
    return (
        <>
            This is Form Modal Component {table} ${type}
        </>
    );
};

export default FormModal;