import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import styles from "./add-conversation.module.css";

const AddConversation = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`${styles.Button} primary`}>Add conversation</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />
        <Dialog.Content className={styles.Content}>
          <Dialog.Title className={styles.Title}>Edit profile</Dialog.Title>
          <Dialog.Description className={styles.Description}>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <form action="">
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.Input}
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
              <Dialog.Close asChild>
                <Button size={"sm"}>Submit</Button>
              </Dialog.Close>
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
