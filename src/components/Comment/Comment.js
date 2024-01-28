import { useForm } from "react-hook-form";

const Comment = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="comment-area">
            <h4>Post Comment</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="row comment-form">
                <div className="col-md-12">
                    <div className="coment-input-form">
                        <i className="fa fa-pencil-alt"></i>
                        <textarea {...register("comment", { required: true })} name="comment" placeholder="Type your comments...." ></textarea>
                        {errors.comment && <span className="text-danger">Message is required</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="coment-input-form">
                        <i className="fa fa-user"></i>
                        <input {...register("name", { required: true })} type="text" name="name" placeholder="Type your name...." />
                        {errors.name && <span className="text-danger">Name is required</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="coment-input-form">
                        <i className="fa fa-envelope"></i>
                        <input {...register("email", { required: true })} type="email" name="email" placeholder="Type your email...." />
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <button className="quomodo-btn" type="submit"><i className="fa fa-comments"></i>Post Comment</button>
                </div>
            </form>
        </div>
    );
};

export default Comment;