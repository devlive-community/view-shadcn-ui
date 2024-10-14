#!/bin/bash
echo "========== Running setup script =========="

components=(
  alert
  avatar
  badge
  button
  card
  collapsible
  command
  dialog
  drawer
  dropdown-menu
  form
  input
  label
  navigation-menu
  popover
  radio-group
  resizable
  select
  separator
  sheet
  switch
  table
  textarea
  tooltip
  context-menu
  tabs
  alert-dialog
)

component_dir="src/components/ui"

for component in "${components[@]}"; do
  if [ -d "$component_dir/$component" ]; then
    echo "Component [ $component ] is already installed"
  else
    echo "Installing component [ $component ]"
    yes | npx shadcn-vue@latest add "$component"
  fi
done

echo "========== Done setup script =========="
