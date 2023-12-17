import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const CATForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm();

  console.log(errors);
  // console.log(handleSubmit);
  // console.log(watch(`example`));// watch input value by passing the name of it
  const onSubmit = (data) => {
    console.log(`Form submitted`, data);
  };
  return (
    <>
      <div> <h1>Cat Assessment Info</h1>
        <div>
          <h2>Instrument</h2>
          <ul>
            <li>Cat Behavioral Instrument </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div><h2>Cat Details</h2>
            <ul>
              <li>
                <h3>Cat Name</h3>
                <input {...register(`catName`, { required: `*Required Field` })}
                  placeholder="Cat Name" type="text" id="catNameID" />
                <p>{errors.catName?.message}</p>
              </li>
              <li>
                <h3>Cat Date of Birth</h3>
                <input {...register(`catDoB`, { required: `*Required Field` })}
                  placeholder="Cat Date of Birth" type="date" id="catDobID" />
              </li>
              <p>{errors.catDoB?.message}</p>
            </ul>
          </div>

          <div>
            <h3>Questions & Responses</h3>
            <ol>
              <li>
                <h3>Previous contact with the Cat Judicial System</h3>
                <label htmlFor="Prev_Cat_No">
                  <input
                    {...register(`Prev_Cat_No`)}
                    type="radio"
                    value="No"
                    id="Prev_Cat_No"
                  />
                  No (score = 0)
                </label>
                <br />

                <label htmlFor="Prev_Cat_Yes">
                  <input
                    {...register(`Prev_Cat_Yes`)}
                    type="radio"
                    value="Yes"
                    id="Prev_Cat_Yes"
                  />
                  Yes (score = 1)
                </label>
              </li>

              <li>
                <h3>Physical altercations with other cats</h3>
                <label htmlFor="0_3_alt_Cats">
                  <input
                    {...register(`0_3_alt_Cats`)}
                    type="radio"
                    value="No"
                    id="0_3_alt_Cats"
                  />
                  0-3 altercations (score = 0)
                </label>
                <br />
                <label htmlFor="3plus_alt_Cats">
                  <input
                    {...register(`3plus_alt_Cats`)}
                    type="radio"
                    value="Yes"
                    id="3plus_alt_Cats"
                  />
                  3+ altercations (score = 1)
                </label>
              </li>

              <li>
                <h3>Physical altercations with owner (scratching, biting, etc...)</h3>
                <label htmlFor="10plus_alt_owner">
                  <input
                    {...register(`10plus_alt_owner`)}
                    type="radio"
                    value="No"
                    id="10plus_alt_owner"
                  />
                  10+ altercations (score = 1)
                </label>
                <br />
                <label htmlFor="10plus_alt_owner">
                  <input
                    {...register(`0-10 altercations (score = 0)`)}
                    type="radio"
                    value="Yes"
                    id="0-10 altercations (score = 0)"
                  />
                  0-10 altercations (score = 0)
                </label>
              </li>

              <li>
                <h3>Plays well with dogs</h3>
                <label htmlFor="Play_dog_No">
                  <input
                    {...register(`Play_dog_No`)}
                    type="radio"
                    value="No"
                    id="Play_dog_No"
                  />
                  No (score = 1)
                </label>
                <br />
                <label htmlFor="Play_dog_Yes">
                  <input
                    {...register(`Play_dog_Yes`)}
                    type="radio"
                    value="Yes"
                    id="Play_dog_Yes"
                  />
                  Yes (score = 0)
                </label>
              </li>

              <li>
                <h3>Hisses at strangers</h3>
                <label htmlFor="Hiss_Str_Yes">
                  <input
                    {...register(`Hiss_Str_Yes`)}
                    type="radio"
                    value="No"
                    id="Hiss_Str_Yes"
                  />
                  Yes (score = 1)
                </label>
              </li>
              <li>
                <label htmlFor="Hiss_Str_No">
                  <input
                    {...register(`Hiss_Str_No`)}
                    type="radio"
                    value="Yes"
                    id="Hiss_Str_No"
                  />
                  No (score = 0)
                </label>
              </li>
            </ol>
          </div>

          <input type="submit" />
        </form>
      </div>
    </>
  );

};
