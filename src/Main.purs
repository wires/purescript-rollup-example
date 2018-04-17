module Main where

import Prelude

import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (log, CONSOLE)

greet :: String -> String
greet name = "Hello, " <> name <> "!"

main :: forall e. Eff (console :: CONSOLE | e) Unit
main = log (greet "World")