module Main where

import Prelude

import Meff (pow)

import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (log, CONSOLE)

calc :: String
calc = show (pow 3.0 4.0)

greet :: String -> String
greet name = "Hello, " <> name <> "!" <> calc

main :: forall e. Eff (console :: CONSOLE | e) Unit
main = log (greet "World")