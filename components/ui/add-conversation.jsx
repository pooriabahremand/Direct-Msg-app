"use client";
import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import styles from "./add-conversation.module.css";

const AddConversation = () => {
  const [open, setOpen] = React.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("event");
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className={`${styles.Button} primary`}>Add conversation</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />
        <Dialog.Content className={styles.Content}>
          <Dialog.Title className={styles.Title}>Add conversation</Dialog.Title>
          <Dialog.Description className={styles.Description}>
            Enter user's email that you want to message and start it
            immediately.
          </Dialog.Description>
          <form onSubmit={handleSubmit}>
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.Input}
                placeholder="someone@example.com"
                id="email"
                type="email"
                required
              />
            </fieldset>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <button className={`${styles.Button} primary`} type="submit">
                Submit
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button className={styles.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddConversation;
