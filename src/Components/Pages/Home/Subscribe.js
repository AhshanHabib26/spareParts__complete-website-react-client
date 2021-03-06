import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="card w-full bg-neutral rounded-none my-12">
        <div className="card-body text-center my-14">
          <h2 className=" text-4xl text-primary font-semibold">Exclusive All Tools And Articles</h2>
          <p className="">
            Join Over A Million Tools And Auto Parts Lovers Community And Get
            Our Latest <br /> Tools Update And Articles Also Helpful Resources Notify
            Your Inbox!
          </p>
          <div className="flex  mt-4 items-center justify-center">
            <div className="form-control px-12 lg:px-0">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter Your Email And Receive Latest News!"
                  className="input input-bordered w-[320px]"
                />
                <button className="btn btn-primary ">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
