import { useForm } from 'react-hook-form';
import { onSubmit } from '../../helpers/onSubmit';
import { useHire } from '../hooks/useHire';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
export const RoboForm = () => {
    const [redirect, setRedirect] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const { addCart } = useHire();
    const handleFormSubmit = async (data: any) => {
        onSubmit(data);
        const robot = JSON.parse(localStorage.getItem('robot')!);
        addCart(robot);
        setRedirect(true);
    };
    if (redirect) {
        return <Navigate replace to="/robot-info" />;
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="roboForm">
                <div className="formArea">
                    <h4 className="formTitle">Hire #RoboServant</h4>

                    <div className="formGroup">
                        <label className="formLabel" htmlFor="">
                            Name
                        </label>
                        <input
                            className="formInput"
                            type="text"
                            placeholder="Name your servant"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <p>This field is required</p>}
                    </div>
                    <div className="formGroup">
                        <label className="formLabel" htmlFor="">
                            Owner
                        </label>
                        <input
                            className="formInput"
                            type="text"
                            placeholder="Who is the master?"
                            {...register('owner', { required: true })}
                        />
                        {errors.owner && <p>This field is required</p>}
                    </div>
                    <button type="submit" className="formButton">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};
