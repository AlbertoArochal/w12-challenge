import { useForm } from 'react-hook-form';

export const RoboForm = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div className="roboForm">
            <div className="formArea">
                <h4 className="formTitle">RoboServant</h4>

                <div className="formGroup">
                    <label className="formLabel" htmlFor="">
                        Name
                    </label>
                    <input
                        className="formInput"
                        type="text"
                        placeholder="Name your servant"
                    />
                </div>
                <div className="formGroup">
                    <label className="formLabel" htmlFor="">
                        Owner
                    </label>
                    <input
                        className="formInput"
                        type="text"
                        placeholder="Who is the master?"
                    />
                </div>
                <button className="formButton">Submit</button>
            </div>
        </div>
    );
};
