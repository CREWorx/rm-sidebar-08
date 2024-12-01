"use client"

import * as React from "react"
import { MessageCircle, Send, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function ChatDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-8 h-12 w-12 rounded-full shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open Chat</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-[60%] max-w-[800px]">
          <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
          <DrawerHeader>
            <div className="flex items-center justify-between">
              <DrawerTitle>Chat with AI</DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </DrawerClose>
            </div>
            <DrawerDescription>
              Ask questions or get help with your code
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 px-4">
            <div className="flex h-[calc(85vh-10rem)] flex-col rounded-lg border bg-muted/50 p-4">
              {/* Chat messages will go here */}
              <div className="flex-1 overflow-y-auto">
                {/* Message list */}
              </div>
              
              {/* Input area */}
              <div className="mt-4">
                <form className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  <Button type="submit">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
