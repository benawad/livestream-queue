import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { classnames } from "tailwindcss-classnames";
import Router from "next/router";

interface Props {}

const JoinQueue: React.FC<Props> = ({}) => {
  const [values, setValues] = useState({ discordName: "", technology: "" });
  const [errors, setErrors] = useState({ discordName: "", technology: "" });
  return (
    <Layout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newErrors = { discordName: "", technology: "" };
          let hasError = false;
          Object.keys(values).forEach((k) => {
            if (!values[k] || !values[k].trim()) {
              newErrors[k] = "required";
              hasError = true;
            }
          });

          if (hasError) {
            setErrors(newErrors);
            return;
          }

          fetch("/api/join-queue", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .then((x) => x.json())
            .then(() => {
              Router.push("/");
            })
            .catch((err) => {
              setErrors({ discordName: "internal error", technology: "" });
            });
        }}
        className="mt-10 mx-auto w-full max-w-sm"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Discord Name
          </label>
          <input
            className={classnames(
              "shadow",
              "appearance-none",
              "border",
              "rounded",
              "w-full",
              "py-2",
              "px-3",
              "text-gray-700",
              "leading-tight",
              "focus:outline-none",
              "focus:shadow-outline",
              {
                ["border-red-500"]: !!errors.discordName,
              }
            )}
            value={values.discordName}
            onChange={(e) =>
              setValues({ ...values, discordName: e.target.value })
            }
            type="text"
            placeholder="jimbob45"
          />
          {errors.discordName && (
            <p className="text-red-500 text-xs italic">{errors.discordName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Technology
          </label>
          <input
            value={values.technology}
            onChange={(e) =>
              setValues({ ...values, technology: e.target.value })
            }
            className={classnames(
              "shadow",
              "appearance-none",
              "border",
              "rounded",
              "w-full",
              "py-2",
              "px-3",
              "text-gray-700",
              "leading-tight",
              "focus:outline-none",
              "focus:shadow-outline",
              {
                ["border-red-500"]: !!errors.technology,
              }
            )}
            type="text"
            placeholder="react"
          />
          {errors.technology && (
            <p className="text-red-500 text-xs italic">{errors.technology}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button className="btn btn-green" type="submit">
            submit
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default JoinQueue;
