inventory = {'pen': 10, 'notebook': 5}
item_to_purchase = 'pen'
quantity_requested = 3
if item_to_purchase in inventory:
    if inventory[item_to_purchase] >= quantity_requested:
        inventory[item_to_purchase] -= quantity_requested
        print(f"Purchase successful. Remaining {item_to_purchase}: {inventory[item_to_purchase]}")
    else:
        print(f"Insufficient stock for {item_to_purchase}")
else:
    print(f"{item_to_purchase} is not available in the inventory.")