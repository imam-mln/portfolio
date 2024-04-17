import { Drawer } from "@mantine/core"

export function DrawerContact() {
  return (
    <Drawer
      opened={ContactOpened}
      position="right"
      onClose={closeContact}
      size="lg"
      title="Contact"
      overlayProps={{ backgroundOpacity: 0.5, blur: 1 }}>
      {/* Drawer content */}
    </Drawer>
  )
}
